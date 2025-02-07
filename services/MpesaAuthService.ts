// services/MpesaAuthService.ts
import axios from 'axios';

const getAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {},
    {
      auth: {
        username: process.env.MPESA_CONSUMER_KEY!,
        password: process.env.MPESA_CONSUMER_SECRET!,
      },
    }
  );
  return response.data.access_token;
};

export default { getAccessToken };