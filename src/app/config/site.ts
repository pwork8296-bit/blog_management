export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "PS Ricca",
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "PS Ricca - Online Plant Nursery in Delhi NCR | Fresh Plants Delivery",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "psriccaenterprises@gmail.com",
  phone1: process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || "+91 96256 63887",
  phone2: process.env.NEXT_PUBLIC_CONTACT_PHONE_2 || "+91 96256 63887",
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "865 Shalimar garden extension 1, Ghaziabad, Uttar Pradesh, India",
  currency: "₹",
  logo: {
    src: "/assets/ps-ricca.png",
    alt: "PS Ricca Logo",
    width: 200,
    height: 60,
  },
  favicon: "/assets/ps-ricca.jpeg",
};
