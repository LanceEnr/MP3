<template>
    <div class="w-screen-xl py-8 px-28 bg-gray-50 min-h-screen">
        <div class="flex flex-col items-right ">
            <h2 class="font-bold text-5xl tracking-tight">User Submissions</h2>
            <div class="flex justify-between items-center">
                <p class="text-neutral-500 text-xl mt-3">
                    For viewing of submissions by different users.
                </p>
                <input type="text" v-model="searchQuery" placeholder="Search submissions..." class="mb-4 p-2 border rounded-md" />
            </div>
            <hr class="h-px my-8 border-yellow-500 border-2" />
        </div>
        <div class="grid gap-7 lg:grid-cols-5 p-1 pl-18 relative">
            <Card v-for="(item, index) in filteredPosts" :key="index" :post="item" />
            <div v-if="filteredPosts.length === 0" class="text-center text-xl">No Submission Match</div>
            </div>
    </div>
</template>
  
<script>
import Card from '../components/Cards.vue';

export default {
    name: 'UserSubmission',
    components: {
        Card,
    },
    data() {
        return {
            posts: [
                {
                    title: "Application Form",
                    img: "https://www.pdffiller.com/preview/332/872/332872673.png",
                    content: "PDF file",
                    date: "2024-02-26",
                    user: "John Doe"
                },
                {
                    title: "Edi wow",
                    img: "https://www.pdffiller.com/preview/332/872/332872673.png",
                    content: "PDF file",
                    date: "2024-02-26",
                    user: "John Doe"
                },
                {
                    title: "Testing 3",
                    img: "https://www.pdffiller.com/preview/332/872/332872673.png",
                    content: "PDF file",
                    date: "2024-02-26",
                    user: "John Doe"
                }
            ],
            searchQuery: ''
        };
    },
    computed: {
        filteredPosts() {
            if (!this.searchQuery) {
                return this.posts;
            }
            return this.posts.filter(post =>
                post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
};
</script>
