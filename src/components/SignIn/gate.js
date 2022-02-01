import { request } from './request'

export const gate = async ({ address, signature, message, profileId }) => {
    const url = '/api/public/gate'
    const { response } = await request(url, 'post', { address, signature, message, profileId })
    return response.data || response
}