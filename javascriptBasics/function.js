// pass object as a parameter
function sisters(obj){
    obj.name = 'hanu';
}

const fav = {
    name : 'entu',
    age : 19,
    dept : 'pharma'
}

console.log(fav.name);
sisters(fav);
console.log(fav.name);

//functions to calculate area
function rectArea(length, width){
    area = length * width;
    return area;
}
function triangleArea(base, height){
    area = 1/2 *base *height;
    return area;
}
function circleArea(r){
    area = Math.PI * r*r;
    return area;
}

console.log(rectArea(3,5))
console.log(triangleArea(4,8));
console.log(circleArea(4));


