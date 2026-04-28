const sanitizeEnvValue = (value) => (value || '').replace(/\\/g, '').trim();

const getLeadSquaredCredentials = () => {
  const accessKey = sanitizeEnvValue(import.meta.env.VITE_LEADSQUARED_ACCESS_KEY);
  const secretKey = sanitizeEnvValue(import.meta.env.VITE_LEADSQUARED_SECRET_KEY);

  if (!accessKey || !secretKey) {
    throw new Error('LeadSquared credentials are missing.');
  }

  return { accessKey, secretKey };
};

export const submitLeadSquaredLead = async (payload) => {
  const { accessKey, secretKey } = getLeadSquaredCredentials();
  const apiUrl = `https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.CreateOrUpdate?postUpdatedLead=false&accessKey=${encodeURIComponent(accessKey)}&secretKey=${encodeURIComponent(secretKey)}`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const rawBody = await response.text();
  let result = null;

  try {
    result = rawBody ? JSON.parse(rawBody) : null;
  } catch {
    result = null;
  }

  return { response, result };
};
