/**
 * Created by Yuntian Chai on 15-5-7.
 */
var test = QUnit.test;


test( "gl detect", function( assert ) {
    assert.ok(detect, "WebGL Detected!" );
});

test( "shader compile", function(assert){
    var cvs = document.createElement('canvas');
    var gl = GL(cvs);

    var vs = "attribute vec4 p;void main() {gl_Position = p;}";
    var fs = "void main(){gl_FragColor = vec4(1.0,1.0,1.0,1.0);}";
    var vs_error = "attribute vec4 p void main() {gl_Position = p;}";
    var fs_error = "void main(){gl_FragColor = vec4(1.0,1.0,1.0,1.0);";

    assert.notEqual(gl,null);
    assert.notEqual(Shader(gl,UL.shader.VERT,vs),null);
    assert.notEqual(Shader(gl,UL.shader.FRAG,fs),null);
    assert.equal(Shader(gl,3,vs),null);
    assert.equal(Shader(gl,3,fs),null);
    assert.equal(Shader(gl,UL.shader.VERT,vs_error),null);
    assert.equal(Shader(gl,UL.shader.FRAG,fs_error),null);

});
