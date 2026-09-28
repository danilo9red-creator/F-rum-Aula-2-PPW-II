const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const courses = await prisma.course.findMany();

    console.log('Cursos cadastrados:');
    console.log(courses);
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });