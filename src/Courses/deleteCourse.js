const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const course = await prisma.course.delete({
        where: {
            id: 1
        }
    });

    console.log('Curso excluído com sucesso:');
    console.log(course);
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });