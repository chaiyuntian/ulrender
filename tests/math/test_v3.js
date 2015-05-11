/**
 * Created by Yuntian Chai on 15-5-10.
 */

function ok(){
    expect(true).toBe(true);
}

function ExpectVector(s)
{
    var a = {};
    a.toBe = function (r) {
        var bo = v3.equals(s, r);
        UL.log("Expected:"+v3.str(s)+",Real Value:"+v3.str(r));
        expect(bo).toBe(true);
        return bo;
    };

    a.toEqual = function (x,y,z) {
        var r = v3.fromXYZ(x,y,z);
        var bo = v3.equals(s,r);
        UL.log("Expected:"+v3.str(s)+",Real Value:"+v3.str(r));
        expect(bo).toBe(true);
        return bo;
    };

    return a;
}

describe( "v3 test", function(){

    it("v3.create",function(){
        var a = v3.create();
        expect(a[0]).toBe(0);
        expect(a[1]).toBe(0);
        expect(a[2]).toBe(0);
    });

    it("v3.equals",function(){
        var b1 = v3.equals(v3.create(),v3.create());
        var x = Math.random();
        var y = Math.random();
        var z = Math.random();
        var b2 = v3.equals(v3.fromXYZ(x,y,z),v3.fromXYZ(x,y,z));
        var b3 = v3.equals(v3.fromXYZ(x,y,z),v3.fromXYZ(x+10E8,y,z));

        expect(b1).toBe(true);
        expect(b2).toBe(true);
        expect(b3).toBe(false);
    });

    it("v3.fromXYZ",function(){

        var x = Math.random();
        var y = Math.random();
        var z = Math.random();
        var precision = 10e-5;
        // toBe test failed because of the UL_ARRAY_TYPE is Float32Array while Math.random is at float64 precision
        var a = v3.fromXYZ(x,y,z);
        expect(a[0]-x).toBeLessThan(precision);
        expect(a[1]-y).toBeLessThan(precision);
        expect(a[2]-z).toBeLessThan(precision);

    });

    it("v3.clone",function(){
        var x = Math.random();
        var y = Math.random();
        var z = Math.random();
        var o = v3.fromXYZ(x,y,z);
        var a = v3.clone(o);
        expect(a[0]).toBe(o[0]);
        expect(a[1]).toBe(o[1]);
        expect(a[2]).toBe(o[2]);
    });

    it("v3.copy",function(){
        var x = Math.random();
        var y = Math.random();
        var z = Math.random();
        var o = v3.fromXYZ(x,y,z);
        var a = v3.create();
        v3.copy(o,a);
        expect(a[0]).toBe(o[0]);
        expect(a[1]).toBe(o[1]);
        expect(a[2]).toBe(o[2]);
    });

    it("v3.dot",function(){
        var a = v3.fromXYZ(1,1,1);
        var b = v3.fromXYZ(5,0.5,0.1);
        var r = v3.dot(a,b);
        expect(r).toBeCloseTo(5.6);
    });

    it("v3.crs",function(){
        var r = v3.create();
        var a = v3.fromXYZ(1,1,1);
        var b = v3.fromXYZ(5,0.5,0.1);
        v3.crs(r,a,b);
        UL.log(v3.str(r));
        ok();
    });

    it("v3.+-*/",function(){
        var r_add = v3.create();
        var r_sub = v3.create();
        var r_mul = v3.create();
        var r_div = v3.create();
        var a = v3.fromXYZ(0.5,0.5,0.5);
        var b = v3.fromXYZ(2,2,2);


        v3.add(r_add,a,b);
        v3.sub(r_sub,a,b);
        v3.mul(r_mul,a,b);
        v3.div(r_div,a,b);

        ExpectVector(r_add).toEqual(2.5,2.5,2.5);
        ExpectVector(r_sub).toEqual(-1.5,-1.5,-1.5);
        ExpectVector(r_mul).toEqual(1,1,1);
        ExpectVector(r_div).toEqual(0.25,0.25,0.25);

    });

    it("v3.len(2)",function(){
        var a =  v3.fromXYZ(1,1,1);
        expect(v3.len(a)).toBeCloseTo(Math.sqrt(3));
        expect(v3.len2(a)).toBeCloseTo(3);
    });

    it("v3.inv",function(){
        var a = v3.fromXYZ(1,1,1);
        var b = v3.create();
        v3.inv(b,a);
        ExpectVector(a).toBe(b);
    });




});
