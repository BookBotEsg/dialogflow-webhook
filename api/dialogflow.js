export default function handler(req, res) {
  const agentMessage = req.body.queryResult.queryText;

  const response = {
    fulfillmentText: Oi! Você disse: "${agentMessage}". Isso veio do webhook Vercel!,
  };

  res.status(200).json(response);
}
