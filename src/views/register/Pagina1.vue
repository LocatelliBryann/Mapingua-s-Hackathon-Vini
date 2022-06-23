<template>
  <v-app>
    <v-flex class="fundo">

        <v-btn
          class="ma-2"
          color="orange darken-2"
          dark>
          <v-icon dark left>
              mdi-arrow-left
          </v-icon>

          Voltar
          </v-btn>

      <div class="main">  
        <div>
            <h1>Qual conta deseja criar</h1>
        </div>
          <div>
            <v-col
            cols="3"
            sm="4"
            md="4"
          >
            <v-checkbox
              label="Estudante"
              color="blue"
              hide-details
            ></v-checkbox>

            <v-checkbox
              label="Monitor"
              color="blue"
              hide-details
            ></v-checkbox>

            <v-checkbox
              label="Administrador"
              color="blue"
              hide-details
            ></v-checkbox>
          </v-col>
          </div>

        <div id="botao1">
             <v-btn elevation="5" color="#E1EFBF" rounded>Cadastro</v-btn>
        </div>
      </div>

    </v-flex>
  </v-app>
</template>

<style>

.main {
  background: linear-gradient(to top, #F3FBF4, #E3FBB4);
  height: 100vh;
}
#botao1{ 
    margin-top: 700px;
    min-width: 100px;
}
.fundo {
  background-color: #E3FBB4;
}
.ma-2 {
  margin:0 ;
}
</style>