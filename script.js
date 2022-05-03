//modelo secuencial
const modelo = tf.sequential()
// se agrega una capa
modelo.add(tf.layers.dense({ units: 1, inputShape: [1] }))

modelo.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd',
})

const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1])
const ys = tf.tensor2d([-1, 2, 5, 8, 11, 14], [6, 1])

function regresion() {
  const x = parseInt(document.getElementById('num').value)
  const salida = document.getElementById('salida')
  // Entrenar el modelo
  modelo.fit(xs, ys, { epochs: 300 }).then(() => {
    //Predecir valores con el modelo
    salida.innerText = modelo.predict(tf.tensor2d([x], [1, 1]))
  })
}
