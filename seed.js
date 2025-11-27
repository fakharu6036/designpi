const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
      description: "Administrator with full access",
    },
  });

  const staffRole = await prisma.role.upsert({
    where: { name: "staff" },
    update: {},
    create: {
      name: "staff",
      description: "Staff member with limited access",
    },
  });

  const customerRole = await prisma.role.upsert({
    where: { name: "customer" },
    update: {},
    create: {
      name: "customer",
      description: "Customer user",
    },
  });

  console.log("✅ Roles created/verified");

  // Create admin user
  const adminPassword = "admin123";
  const adminHash = await bcrypt.hash(adminPassword, 10);

  const adminUser = await prisma.user.upsert({
    where: { email: "hello@designpi.com" },
    update: {
      password_hash: adminHash,
      roleId: adminRole.id,
    },
    create: {
      email: "hello@designpi.com",
      name: "Admin User",
      password_hash: adminHash,
      roleId: adminRole.id,
      emailVerified: new Date(),
    },
  });

  console.log("✅ Admin user created/updated:");
  console.log(`   Email: ${adminUser.email}`);
  console.log(`   Password: ${adminPassword}`);

  // Create staff members
  const staffPassword = "staff123";
  const staffHash = await bcrypt.hash(staffPassword, 10);

  const staff1 = await prisma.user.upsert({
    where: { email: "sarah@designpi.com" },
    update: {
      password_hash: staffHash,
      roleId: staffRole.id,
    },
    create: {
      email: "sarah@designpi.com",
      name: "Sarah Johnson",
      password_hash: staffHash,
      roleId: staffRole.id,
      emailVerified: new Date(),
      phone: "+1-555-0101",
    },
  });

  const staff2 = await prisma.user.upsert({
    where: { email: "mike@designpi.com" },
    update: {
      password_hash: staffHash,
      roleId: staffRole.id,
    },
    create: {
      email: "mike@designpi.com",
      name: "Mike Chen",
      password_hash: staffHash,
      roleId: staffRole.id,
      emailVerified: new Date(),
      phone: "+1-555-0102",
    },
  });

  console.log("✅ Staff members created/updated:");
  console.log(`   ${staff1.email} / ${staffPassword}`);
  console.log(`   ${staff2.email} / ${staffPassword}`);

  // Create demo customers
  const customerPassword = "customer123";
  const customerHash = await bcrypt.hash(customerPassword, 10);

  const customer1 = await prisma.user.upsert({
    where: { email: "john.doe@example.com" },
    update: {
      password_hash: customerHash,
      roleId: customerRole.id,
    },
    create: {
      email: "john.doe@example.com",
      name: "John Doe",
      password_hash: customerHash,
      roleId: customerRole.id,
      emailVerified: new Date(),
      phone: "+1-555-0201",
      company: "Acme Corporation",
    },
  });

  const customer2 = await prisma.user.upsert({
    where: { email: "jane.smith@example.com" },
    update: {
      password_hash: customerHash,
      roleId: customerRole.id,
    },
    create: {
      email: "jane.smith@example.com",
      name: "Jane Smith",
      password_hash: customerHash,
      roleId: customerRole.id,
      emailVerified: new Date(),
      phone: "+1-555-0202",
      company: "Tech Solutions Inc",
    },
  });

  const customer3 = await prisma.user.upsert({
    where: { email: "bob.wilson@example.com" },
    update: {
      password_hash: customerHash,
      roleId: customerRole.id,
    },
    create: {
      email: "bob.wilson@example.com",
      name: "Bob Wilson",
      password_hash: customerHash,
      roleId: customerRole.id,
      emailVerified: new Date(),
      phone: "+1-555-0203",
      company: "Global Ventures LLC",
    },
  });

  console.log("✅ Demo customers created/updated:");
  console.log(`   ${customer1.email} / ${customerPassword}`);
  console.log(`   ${customer2.email} / ${customerPassword}`);
  console.log(`   ${customer3.email} / ${customerPassword}`);

  // Create demo leads (delete existing first to avoid duplicates)
  await prisma.lead.deleteMany({
    where: {
      email: {
        in: [
          "alice.brown@startup.com",
          "david.lee@enterprise.com",
          "emma.garcia@creative.io",
        ],
      },
    },
  });

  const lead1 = await prisma.lead.create({
    data: {
      name: "Alice Brown",
      email: "alice.brown@startup.com",
      phone: "+1-555-0301",
      company: "Startup Innovators",
      message: "Interested in your design services for our new product launch.",
      status: "new",
      source: "website",
    },
  });

  const lead2 = await prisma.lead.create({
    data: {
      name: "David Lee",
      email: "david.lee@enterprise.com",
      phone: "+1-555-0302",
      company: "Enterprise Solutions",
      message: "Looking for a design partner for enterprise software redesign.",
      status: "contacted",
      source: "referral",
    },
  });

  const lead3 = await prisma.lead.create({
    data: {
      name: "Emma Garcia",
      email: "emma.garcia@creative.io",
      phone: "+1-555-0303",
      company: "Creative Agency",
      message: "Want to discuss collaboration opportunities.",
      status: "qualified",
      source: "social",
    },
  });

  console.log("✅ Demo leads created:");
  console.log(`   ${lead1.email} - ${lead1.status}`);
  console.log(`   ${lead2.email} - ${lead2.status}`);
  console.log(`   ${lead3.email} - ${lead3.status}`);

  // Create demo tickets (new ticket system)
  const ticket1 = await prisma.ticket.create({
    data: {
      customerId: customer1.id,
      assignedTo: staff1.id,
      subject: "Project assistance needed",
      description: "Customer needs help with their ongoing project.",
      status: "OPEN",
      priority: "MEDIUM",
      source: "seed",
    },
  });
  const ticket2 = await prisma.ticket.create({
    data: {
      customerId: customer2.id,
      assignedTo: staff2.id,
      subject: "Quote request",
      description: "Customer requesting design services quote.",
      status: "IN_REVIEW",
      priority: "HIGH",
      source: "seed",
    },
  });
  const ticket3 = await prisma.ticket.create({
    data: {
      customerId: customer3.id,
      subject: "General onboarding question",
      description: "Customer has a question about onboarding process.",
      status: "OPEN",
      priority: "LOW",
      source: "seed",
    },
  });
  await prisma.ticketMessage
    .create({
      data: {
        ticketId: ticket1.id,
        authorUserId: customer1.id,
        body: "Hello, I need help with my project.",
      },
    })
    .catch(() => {});
  await prisma.ticketMessage
    .create({
      data: {
        ticketId: ticket1.id,
        authorStaffId: staff1.id,
        body: "Hi John! I'd be happy to help. What's your project about?",
      },
    })
    .catch(() => {});
  console.log("✅ Demo tickets created with initial messages");

  console.log("\n🎉 Database seeding completed!");
  console.log("\n📋 Summary:");
  console.log("   - Admin: hello@designpi.com / admin123");
  console.log("   - Staff: sarah@designpi.com, mike@designpi.com / staff123");
  console.log(
    "   - Customers: john.doe@example.com, jane.smith@example.com, bob.wilson@example.com / customer123"
  );
  console.log("   - 3 demo leads");
  console.log("   - 3 demo tickets (new system)");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
