const gql = String.raw;

const session = gql`query {
  productByHandle(handle: "session") {
    priceRangeV2 {
      minVariantPrice {
        amount
      }
    }
  }
}`;

export async function getStorefront() {
	const response = await fetch(
		'https://rmg-studio.myshopify.com/api/2023-07/graphql.json',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token':
					'a657bb095b06b4823d67974a25b64310',
			},
			body: JSON.stringify({
				session,
			}),
		},
	);

	const { data, errors } = await response.json();
	console.log(data);
	if (errors) {
		console.log(errors);
	}

	return data;
}
