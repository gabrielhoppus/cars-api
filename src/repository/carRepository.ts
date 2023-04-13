import prisma from "../config/database.js";


async function getCars() {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findUnique({
    where: {
      id,
    },
  })
  return data
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await prisma.cars.findUnique({
    where: {
      licensePlate,
    }
  });
  return data;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  const data = await prisma.cars.create({
    data: {
      model,
      licensePlate,
      year,
      color
    }
  })
  return data;
}

async function deleteCar(id: number) {
  const data = await prisma.cars.delete ({
    where: {
      id,
    }
  })
  return data;
}

async function updateCar(id: number, model: string, licensePlate: string, year: number, color: string ){
  const updatedCar = await prisma.cars.update({
    where{
      id,
    },
    data:{
      model,
      
    }
    
  })
}


const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;