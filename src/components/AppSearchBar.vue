<template>
    <div class="container">
        <div class="row justify-content-between mb-4">   
            <div class="col-4">
                <select @change="$emit('filterStatus')" v-model="store.selectedStatus">
                    <option :value="status" v-for="status in optionList"> {{ status }}</option>
                </select>
            </div>        
            
            <div class="col-auto">
                <span>Mostrati {{ store.arrayCharacters.length }} elementi</span>
            </div>
        </div>
    </div>
</template>

<script>

import { store } from '../store';

    export default {
        data() {
            return {
                store,
                optionList: ["All","Alive","Dead","Unknown"],
            }
        }
    }
</script>

<style lang="scss" scoped>
    select {
        border: 0;
        padding: 10px 20px;
        border-radius: 10px;

        option {
            width: 200px;
        }
    }


</style>