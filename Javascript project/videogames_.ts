class Videogame {
    title: string;
    developer: string;
    availableCopies: number;
    price: number;
    copiesSold: number;
     
    static availableGames:Videogame[] = [];
    static soldOutGames:Videogame[] = [];
    static totalSold = 0;
    static accumulatedMoney: number = 0;

    constructor (title:string, developer:string, availableCopies:number, price:number, copiesSold:number){
        this.title = title;
        this.developer = developer;
        this.availableCopies = availableCopies;
        this.price = price;
        this.copiesSold = copiesSold;

        Videogame.totalSold += copiesSold;

        if (this.availableCopies>0){
            Videogame.availableGames.push(this);
        }
        else Videogame.soldOutGames.push(this);
               
        }

        isAvailable(): boolean {
         if (this.availableCopies > 0){
            return true;
            }
            else {
                return false;
            }
        }

        sell(numberOfCopies: number = 1): number{
            if(this.isAvailable()===false){
                throw new Error(`the game "${this.title}" has no more available copies`);
        }
            if (this.availableCopies < numberOfCopies) {
                throw new Error(`there's no enough copies of "${this.title}" to sale`);
            }

            for (let i = 0; i < numberOfCopies; i++) {
            this.availableCopies -= 1;
            this.copiesSold += 1;
            Videogame.totalSold += 1;
            Videogame.accumulatedMoney += this.price;
            console.log('the game sold was ' + this.title);
             }
            if (this.availableCopies===0){
                Videogame.availableGames = Videogame.availableGames.filter(game => game !== this);
                Videogame.soldOutGames.push(this);

            }
            return this.price*numberOfCopies;
        
        }

         static getTotalSold(): number {
             return this.accumulatedMoney;
                   
         }
    
         static sellGames (games: Videogame[], copies?: number[]): number{
            let total = 0;
            let numCopies;
            for (let i = 0; i < games.length; i++) {
                const game = games[i];
                
                if (copies && copies[i] !== null && copies[i] !== undefined) {
                numCopies = copies[i];
                } else {
                numCopies = 1;
                }

                try {
                  total += game.sell(numCopies);
                } catch (error) {
                  console.log(`The following game is not available: "${game.title}": ${error}`);
                } finally {
                  console.log(`game successfully procesed "${game.title}"`);
                }
            }
            return total;
        }
 }