<template>
  <v-app>
    <v-flex>
      <div class="main">  
        <div id="botao1">
             <v-btn elevation="5" color="#E1EFBF" rounded>Cadastro</v-btn>
        </div>
        <div>
            <h1>Qual conta deseja criar</h1>
        </div>
      </div>
    </v-flex>
  </v-app>
</template>

<style>

.main {
  background: linear-gradient(to top, #F3FBF4, #E3FBB4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#botao1{ 
    margin-top: 700px;
    min-width: 100px;
}

.h1 {
    margin-top: 100px;
}


</style>
