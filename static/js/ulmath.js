var ulmath = {};
UL.math = ulmath;
if(!UL_ARRAY_TYPE){
    var UL_ARRAY_TYPE = (typeof Float32Array !=='undefined')?Float32Array:Array;
}

var v3 = {};

v3.create = function()
{
    var r = new UL_ARRAY_TYPE(3);
    r[0] = 0;
    r[1] = 0;
    r[2] = 0;
    return r;
};

v3.equals = function(a, b) {
    return (a[0] == b[0] && a[1] == b[1] && a[2] == b[2]);
};


v3.fromXYZ = function(x,y,z){
    var r = new UL_ARRAY_TYPE(3);
    r[0] = x;
    r[1] = y;
    r[2] = z;
    return r;
};

v3.clone = function(s) {
    var r = new UL_ARRAY_TYPE(3);
    r[0] = s[0];
    r[1] = s[1];
    r[2] = s[2];
    return r;
};

v3.copy = function(s,r){
    r[0] = s[0];
    r[1] = s[1];
    r[2] = s[2];
    return r;
};

v3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

v3.crs = function(r, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];
    r[0] = ay * bz - az * by;
    r[1] = az * bx - ax * bz;
    r[2] = ax * by - ay * bx;
    return r;
};

v3.add = function(r,a,b){
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
};

v3.sub = function(r,a,b){
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
};

v3.mul = function(r, a, b){
    r[0] = a[0]*b[0];
    r[1] = a[1]*b[1];
    r[2] = a[2]*b[2];
    return r;
};

v3.div = function(r, a, b){
    r[0] = a[0] / b[0];
    r[1] = a[1] / b[1];
    r[2] = a[2] / b[2];
    return r;
};

v3.dist = function(r, a, b){
    var x = a[0] - b[0];
    var y = a[1] - b[1];
    var z = a[2] - b[2];
    return Math.sqrt(x*x + y*y + z*z);
};

v3.len = function(s){
    var x = s[0], y = s[1], z = s[2];
    return Math.sqrt(x*x + y*y + z*z);
};

v3.len2 = function(s){
    var x = s[0], y = s[1], z = s[2];
    return x*x + y*y + z*z;
};

v3.neg = function(r, s){
    r[0] = -s[0];
    r[1] = -s[1];
    r[2] = -s[2];
};

v3.inv = function(r, s){
    r[0] = 1.0/s[0];
    r[1] = 1.0/s[1];
    r[2] = 1.0/s[2];
};

v3.norm = function(r, s){
    var x = s[0], y = s[1], z = s[2];
    var l = x*x + y*y + z*z;
    if(l>0){
        l = 1/Math.sqrt(l);
        r[0] = s[0] * l;
        r[1] = s[1] * l;
        r[2] = s[2] * l;
    }
    return r;
};


v3.str = function(s){
    return 'v3('+s[0]+', '+s[1]+', '+s[2]+')';
};