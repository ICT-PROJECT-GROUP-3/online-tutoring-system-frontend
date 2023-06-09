import { randomUUID } from 'crypto';
import { Client } from 'square';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken:
    //    process.env.SQUARE_ACCESS_TOKEN,
    'EAAAEN5Vtdl5FqyfFIk7Hm04jQeu_g7J-S8EItzvVQi-MCGErQzSMwCmOlG1_fC6',
  environment: 'sandbox' as any,
});

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: req.body.payment_amount as any,
      },
    });
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}
