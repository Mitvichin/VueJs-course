<template>
     <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5" :key="index">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <!-- server-details -->
            <app-server></app-server>
        </div>
</template>
<script>
export default {
    
}
</script>

