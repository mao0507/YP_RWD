var vm = new Vue({
    el: "#app",
    data: {},
    created() {
        //this.test();
        //this.open();
     },
    methods: {
        open() {
            //alert("open");
            //$('#myModal').modal({ backdrop: 'static', keyboard: false }, 'show');
             $('#myModal').modal({backdrop: 'static', keyboard: false},'show');
        },
        close() {
            $('#myModal').modal('hide');
        },
        test(){
            alert("work");
        }
    }

})