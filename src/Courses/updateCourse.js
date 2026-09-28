const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const course = await prisma.course.update({
        where: {
            id: 1
        },
        data: {
            name: 'Desenvolvimento Web Full Stack',
            description: 'Curso completo de desenvolvimento web',
            workload: 120
        }
    });

    console.log('Curso atualizado com sucesso:');
    console.log(course);
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });