<script lang="ts">
    import {onMount} from "svelte";
    import {zanzoMode,type ZanzoModeState} from "../../services";

    let { children } = $props();
    let mode = $state<ZanzoModeState>('on');

    onMount(()=>{
        mode = zanzoMode.mode;

        const unsubscribe = zanzoMode.subscribe((newMode)=>{
            mode = newMode;
        })

        return unsubscribe;
    })
</script>



<button type="button" onclick={()=> zanzoMode.toggle()} aria-pressed={mode === 'on'}>
    {@render children()}
</button>