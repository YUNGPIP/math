function areaOfTriangle(obj){
    var a=1*obj.st1.value;
    var b=1*obj.st2.value;
    var c=1*obj.st3.value;
    var p=(a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value=(s).toFixed(2);
    var min;
    var max;
    if (a>b && a>c){
        max = 1*a;
    }
    if (a<b && a<c){
        min = 1*a;
    }
    if (b>a && b>c){
        max = 1*b;
    }
    if (b<a && b<c){
        min = 1*b;
    }
    if (c>b && c>a){
        max = 1*c;
    }
    if (c<b && c<a){
        min = 1*c;
    }
    obj.resmin.value=(min);
    obj.resmax.value=(max);
    
}