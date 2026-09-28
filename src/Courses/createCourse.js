const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const course = await prisma.course.create({
        data: {
            name: 'Desenvolvimento Web',
            description: 'Curso de desenvolvimento de aplicações web',
            workload: 80
        }
    });

    console.log('Curso cadastrado com sucesso:');
    console.log(course);
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });