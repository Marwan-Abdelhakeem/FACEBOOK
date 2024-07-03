import { Sequelize } from "sequelize";

// export const sequelizeInstance = new Sequelize('mysql://uevvhdwwrb1nq3ja:9b0w1Utn90ZMaTimGQo9@bqinxeemfkhwowmfmz9u-mysql.services.clever-cloud.com:3306/bqinxeemfkhwowmfmz9u');

export const sequelizeInstance = new Sequelize('b6vtygmpqejsfsext4zl', 'u2eye2wvrvweo6zi',"eCYcEgrxvZd1YXYpnKY5" , {
  host: 'b6vtygmpqejsfsext4zl-mysql.services.clever-cloud.com',
  dialect: 'mysql'
});

const dbConnection = async ()=>{
    try {
        await sequelizeInstance.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
export default dbConnection; 