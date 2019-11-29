<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>BOOST-comments</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-toolbar>
          <v-row>
        <v-subheader>Deel nu wat jouw opvalt!</v-subheader>
        <v-col cols="12">
          <v-text-field
            label="Titel"
            outlined
            v-model="titel"
          ></v-text-field>
          <v-textarea outlined name="input-7-4" label="Deel hier een opvallend resultaat" value v-model="text"></v-textarea>
          <div class="text-center">
            <v-btn rounded color="primary" @click="addComment()">Voeg toe</v-btn>
          </div>
        </v-col>
      </v-row>

    <v-list three-line style="position:relative;">
      <v-subheader>Opvallende resultaten</v-subheader>
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      titel: "",
      text: "",
      manager: "Jason Gawke"
    };
  },
  methods: {
    addComment: function(){
      this.titel? this.titel: this.titel = "Geen titel";
      this.text? this.text: this.text="Geen text";
      let a = {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: this.titel,
        subtitle:
          "<span class='text--primary'>" + this.manager + "</span> &mdash;" + this.text + "."
      }
      this.items.unshift(a);
      this. titel = "";
      this.text = "";
    },
  },
  created() {
    let b = [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Nudge effectief?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; De 2e lijkt effectiever, wat kunnen we daarmee? "
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Aanmoediging",
        subtitle:
          "<span class='text--primary'>James Audreth</span> &mdash; Resultaat maand Maart agenderen in DT?"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Heel interessant, ik heb de grafieken gedownload"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Delen?",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Ik merk echt resultaat, is deze interventie ook niet iets voor Team BI?"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "We zijn van start",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; Morgen is de Workshop. Allemaal er klaar voor?"
      }
    ];
    this.items.push(b);
    this.items = this.items[0];
  }
};
</script>