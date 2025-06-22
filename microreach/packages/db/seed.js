const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Demo-User: Brand
  const brandUser = await prisma.user.create({
    data: {
      email: 'brand@demo.com',
      name: 'BioSnacks GmbH',
      role: 'brand',
      profile: {
        create: {
          companyName: 'BioSnacks GmbH',
          industry: 'Lebensmittel',
        },
      },
    },
    include: { profile: true },
  });

  // Demo-User: Influencer
  const influencerUser = await prisma.user.create({
    data: {
      email: 'influencer@demo.com',
      name: 'Lena Micro',
      role: 'influencer',
      profile: {
        create: {
          followerCount: 2500,
          contentGalleryUrl: 'https://instagram.com/lenamicro',
          isVerified: true,
        },
      },
    },
    include: { profile: true },
  });

  // Demo-Kampagne
  await prisma.campaign.create({
    data: {
      title: 'Bio-Snacks Launch',
      requirements: 'Food-Influencer, Instagram-Post',
      budget: 500,
      deadline: new Date('2024-06-30'),
      profileId: brandUser.profile.id,
    },
  });

  await prisma.campaign.create({
    data: {
      title: 'Fitness App Promo',
      requirements: 'Fitness, TikTok oder Instagram',
      budget: 300,
      deadline: new Date('2024-07-15'),
      profileId: brandUser.profile.id,
    },
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
