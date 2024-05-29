import axios from 'axios';

export class CarrinhoClient {
    private static instance: CarrinhoClient;
    private url: string
    private token: string;


    private constructor() {
        this.url = 'http://localhost:3005/';
    }

    public static getInstance(){
        if (!CarrinhoClient.instance) {
            CarrinhoClient.instance = new CarrinhoClient();
        }

        return CarrinhoClient.instance;
    }

    public async authentication(email: string, password: string){
        this.token = (
            await axios.get(
                `${this.url}auth/login?email=${email}&password=${password}`
            )
        ).data.token;
    }

    
    public async addCarrinho(produtos: []){       
         produtos.forEach(async (produto) => {
            await axios.post(`${this.url}products`, produto, {
                headers: {
                    Authorization: this.token,
                }
            });
        });
    }


   public async getProducts(){
        const response =  await axios.get(`${this.url}products`, {
            headers: {
                Authorization: this.token,
            }
        });

        return response.data;
   }
}