const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const course = await prisma.course.findUnique({
        where: {
            id: 1
        }
    });

    console.log('Curso encontrado:');
    console.log(course);
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });