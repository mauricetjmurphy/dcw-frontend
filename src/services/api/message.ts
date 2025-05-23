import { config } from '@/config/config';
import { Message } from '@/types/message';
import axios from 'axios';

export async function sendMessage(values: Message) {
  console.log(config.mailApiUrl);

  try {
    const response = await axios.post(
      `${config.mailApiUrl}/send-message`,
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        budget: values.budget,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Message sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}
