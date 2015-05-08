/**
 * Created by Yuntian Chai on 15-5-7.
 */

UL.shader = {FRAG:1,VERT:2};


function detect(){
    try{
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext
        &&(canvas.canvas.getContext("webgl")||canvas.getContext("experimental-webgl")));
    }
    catch(e)
    {
        UL.error("WebGL context is not available!");
        return false;
    }
}



var GL = function(canvas){
    var gl = canvas.getContext("webgl")||canvas.getContext("experimental-webgl");

    return gl;
};

var Shader = function(gl,type,string){
    var shader;
    UL.log("start compiling shader!");
    if(type==UL.shader.FRAG){
        shader = gl.createShader(gl.FRAGMENT_SHADER)
    }
    else if(type==UL.shader.VERT){
        shader = gl.createShader(gl.VERTEX_SHADER);
    }
    else
    {
        UL.error("shader type should be either UL.shader.FRAG/UL.shader.FRAG");
        return null;
    }

    gl.shaderSource(shader,string);
    gl.compileShader(shader);

    if(gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false)
    {
        UL.error("Shader compiler failure!");
        return null;
    }
    var info = gl.getShaderInfoLog(shader);
    if(info!=='')
    {
        UL.warn('gl.getshaderInfoLog()',info);
    }

    UL.log("Shader compile finished.");
    return shader;
};

var shaderParser = function(str)
{

};


UL.gl = {init:GL, detect:detect};


