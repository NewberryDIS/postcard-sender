<script>

const bgArray = [
        ['nby_1BH1504','1'],
        ['nby_1BH2115','1'],
        ['nby_1BH2128','1'],
        ['nby_VO184','1']
    ]
const bgImage = bgArray[Math.floor(Math.random() * 4)]
</script>

<img src={`https://iiif.archivelab.org/iiif/${bgImage[0]}$${bgImage[1]}/full/1000,/0/default.jpg`} alt="" class="bg-image" />

<style>
    .bg-image {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        width: 100vw;
        height: 100vh;
        overflow: hidden;
        mix-blend-mode: screen;
        filter: grayscale(100%) contrast(200%);
        opacity: 0.5;
        object-fit: cover;
    }
</style>