import { useWeb3 } from "@3rdweb/hooks"
import { gate } from './gate';
import styles from './SignIn.module.css'
import MetaMaskLogo from './metaMaskLogo.svg'

const SignIn = ({ profileId }) => {
    const { address, provider } = useWeb3();
    const signatureMessage = `Sign in as ${address}`;
    const onClickHandler = async () => {
        const signer = provider.getSigner();
        const signature = await signer.signMessage(signatureMessage);
        const gateResult = await gate({
            address,
            profileId,
            signature,
            message: signatureMessage,
        })
        if (gateResult.passes) {
            window.location.replace(`${gateResult.successURL}?address=${address}`);
            return null;
        }
        window.location.replace(gateResult.errorURL);
    }
    return (<button onClick={onClickHandler} className={styles.thirdAuthButton}>
        <img src={MetaMaskLogo.src} alt="Connect with MetaMask" />
        Connect with MetaMask
    </button>)
}

export default SignIn