const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main(){
    try{
        const impacto1 = await prisma.tipoImpacto.upsert({
            where: { nombreImpacto: "Enredos" },
            update: {},
            create:{
                nombreImpacto: "Enredos",
                detalleImpacto: "Artículos como sogas, redes, trampas y líneas de monofilamento de equipos de pesca abandonados, perdidos o descartados enmarañan a los animales marinos, causándoles heridas, asfixia, restricciones de movilidad y la muerte."
            }
        });

        const impacto2 = await prisma.tipoImpacto.upsert({
            where: { nombreImpacto: "Ingesta" },
            update: {},
            create:{
                nombreImpacto: "Ingesta",
                detalleImpacto: "Los animales marinos de todo tipo ingieren plástico, desde los superpredadores hasta el plancton en la base de la cadena alimenticia. Esto puede ocasionarles lesiones graves, afectando la ingesta de alimentos al generar un falso sentido de saciedad, bloqueando su sistema digestivo o causando heridas internas"
            }
        });

        const impacto3 = await prisma.tipoImpacto.upsert({
            where: { nombreImpacto: "Asfixia" },
            update: {},
            create:{
                nombreImpacto: "Asfixia",
                detalleImpacto: "La contaminación por plásticos priva de luz, alimentos y oxígeno a los corales, esponjas y animales que viven en el lecho marino y reduce la cantidad de oxígeno y comida disponible en los sedimentos. Esto puede impactar negativamente a los ecosistemas y darle cabida a los patógenos en deteriorode la vida marina"
            }
        });

        const impacto4 = await prisma.tipoImpacto.upsert({
            where: { nombreImpacto: "Contaminación química" },
            update: {},
            create:{
                nombreImpacto: "Contaminación química",
                detalleImpacto: "Aunque no todos los ingredientes en el plástico son dañinos, algunos sí lo son y pueden filtrarse en el ambiente marino. Las partículas de plástico más pequeñas pueden atravesar las células de los animales marinos y algunas pueden llegar hasta el cerebro."
            }
        });

        console.log("Create 4 registros de impactos");
    }
    catch(e){
        console.error(e);
        process.exit(1);
    }
    finally{
        await prisma.$disconnect();
    }
})();

(async function main(){
    try{
        const wildlife1 = await prisma.wildlife.upsert({
            where: { animal: "Totoaba" },
            update: {},
            create:{
                animal: "Totoaba",
                detalles: "Localizada en el norte del Golfo de California de México, este pez enfrenta desde hace décadas una dura caza furtiva porque su buche es enormemente codiciado en China, donde se le atribuyen capacidades afrodisíacas y medicinales. Su pesca supone el sustento principal de muchos habitantes de pueblos del Alto Golfo de California, como San Felipe o Puerto Peñasco Sonora. El precio que pagan los intermediarios asiáticos a los pescadores mexicanos por un kilo de vejiga o buche es de entre 500 a 2,000 dólares."
            }
        });

        const wildlife2 = await prisma.wildlife.upsert({
            where: { animal: "Tortuga carey" },
            update: {},
            create:{
                animal: "Tortuga carey",
                detalles: "Se localiza en la reserva de la biosfera de las aguas mexicanas del Golfo de California, es uno de los cetáceos más pequeños del mundo (150 cm) con un peso promedio de 50 kg. A pesar de que sólo ha pasado medio siglo desde que fue vista por primera vez, hoy se encuentra en grave peligro de extinción debido a que queda atrapada en las redes de pesca, aunque esta práctica esta prohibida; se estima que la población se reduce hasta el 15% cada año; se reporta que sólo queda una docena de vaquitas marinas."
            }
        });

        const wildlife3 = await prisma.wildlife.upsert({
            where: { animal: "Vaquita Marina" },
            update: {},
            create:{
                animal: "Vaquita Marina",
                detalles: "Localizada en el norte del Golfo de California de México, este pez enfrenta desde hace décadas una dura caza furtiva porque su buche es enormemente codiciado en China, donde se le atribuyen capacidades afrodisíacas y medicinales. Su pesca supone el sustento principal de muchos habitantes de pueblos del Alto Golfo de California, como San Felipe o Puerto Peñasco Sonora. El precio que pagan los intermediarios asiáticos a los pescadores mexicanos por un kilo de vejiga o buche es de entre 500 a 2,000 dólares."
            }
        });

        const wildlife4 = await prisma.wildlife.upsert({
            where: { animal: "Ballena Azul" },
            update: {},
            create:{
                animal: "Ballena Azul",
                detalles: "Con un tamaño que va de 24 hasta 30 metros y un peso de alrededor de 173 toneladas, la ballena azul se encuentra en la cima de la cadena alimenticia con un papel importante para mantener el balance de los ecosistemas marinos. La especie también ha sufrido un descenso en su población debido a la pesca comercial excesiva, a pesar de que ésta fue prohibida a partir de 1966. De acuerdo con un reporte de 2016 de la Unión Internacional para la Conservación de la Naturaleza (UICN), se estima que hay entre 10 mil a 25 mil ejemplares. Entre los meses de enero y marzo, este mamífero, catalogado como el más grande del planeta llega a las aguas del Parque Nacional Bahía de Loreto en Baja California Sur para reproducirse y tener a sus crías."
            }
        });

        console.log("Create 4 especies en peligro de extincion");
    }
    catch(e){
        console.error(e);
        process.exit(1);
    }
    finally{
        await prisma.$disconnect();
    }
})();