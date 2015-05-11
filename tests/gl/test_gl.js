/**
 * Created by Yuntian Chai on 15-5-7.
 */

describe("gl tests",function(){
    it("gl detect",function(){
        var r = detect();
        expect(r).toBeTruthy();
    });
    var cvs = document.createElement('canvas');
    var gl = GL(cvs);

    var vs = "attribute vec4 p;void main() {gl_Position = p;}";
    var fs = "void main(){gl_FragColor = vec4(1.0,1.0,1.0,1.0);}";
    var vs_error = "attribute vec4 p void main() {gl_Position = p;}";
    var fs_error = "void main(){gl_FragColor = vec4(1.0,1.0,1.0,1.0);";

    it("gl init",function(){
       expect(gl==null).toBeFalsy();

    });

    it("shader compile",function(){
        expect(Shader(gl,UL.shader.VERT,vs)==null).toBeFalsy();
        expect(Shader(gl,UL.shader.FRAG,fs)==null).toBeFalsy();
        expect(Shader(gl,3,vs)).toBeNull();
        expect(Shader(gl,3,fs)).toBeNull();
        expect(Shader(gl,UL.shader.VERT,vs_error)).toBeNull();
        expect(Shader(gl,UL.shader.FRAG,fs_error)).toBeNull();

    });


});
