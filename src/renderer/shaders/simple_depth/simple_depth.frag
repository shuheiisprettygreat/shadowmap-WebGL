#version 300 es
precision mediump float;

out vec4 FragColor;

void main(){
    gl_FragDepth = gl_FragCoord.z;
    FragColor = vec4(0,0,0,0);
}