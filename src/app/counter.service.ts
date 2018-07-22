export class  CounterService{

    ActiveToInActiveCounter=0;
    InActiveToActiveCounter=0;

    IncActiveToInActive(){
        this.ActiveToInActiveCounter++;
        console.log('Active to inActive' + this.ActiveToInActiveCounter);
    }

    incInActiveToActive(){
        this.InActiveToActiveCounter++;
        console.log('inActive to Active' + this.InActiveToActiveCounter);
    }
}
