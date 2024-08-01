import apiClient from '../../utils/libs/apiClient'

export const postNunchiGameButton = async (
  token: string | null,
  buttonType: string,
) => {
  await apiClient.post(
    `/game/button`,
    {
      button_type: buttonType,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    },
  )
}
