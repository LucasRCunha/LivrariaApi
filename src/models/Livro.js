import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório"]
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"],
    autopopulate: true
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatória"]
  },
  numeroPaginas: {
    type: Number,
    min: [1, "O número de páginas deve estar entre 1 e 10000. Valor fornecido: {VALUE}"],
    max: [10000, "O número de páginas deve estar entre 1 e 10000. Valor fornecido: {VALUE}"]
  },
});

livroSchema.plugin(autopopulate);
const livros = mongoose.model("livros", livroSchema);

export default livros;