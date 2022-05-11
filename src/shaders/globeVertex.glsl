varying vec2 vectorUV;
varying vec3 vectorNormal;

void main() {
  vectorUV = uv;
  vectorNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}