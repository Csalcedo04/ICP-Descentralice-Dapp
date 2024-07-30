import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor Dbank{
  stable var currentValue: Float = 300;
  // currentValue:=300;
  stable var startTime = Time.now();
  
  public func topUp (amount : Float){
    currentValue+=amount;
  };
  public func withdrawl (amount : Float){
    let tempValue : Float = currentValue - amount;
    if (tempValue >=0){
        currentValue-=amount;
    }else{
      Debug.print("Fondos insuficientes");
    };
  };
  public query func checkBalance (): async Float{
    return currentValue;
  };
  public func compoun (){
    let currentTime= Time.now();
    let timeElapseNS = currentTime - startTime;
    let timeElapseS = timeElapseNS/1000000000;
    Debug.print(debug_show(timeElapseS));
    currentValue := currentValue *(1.01**Float.fromInt(timeElapseS));
    startTime:= currentTime;
  }
}