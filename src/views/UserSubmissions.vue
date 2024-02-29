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
                    title: "Tax Form",
                    img: "https://juan.tax/wp-content/uploads/2018/06/BIR-Form-1601FQ.jpg",
                    content: "PDF file",
                    date: "2024-02-27",
                    user: "Jane Smith"
                },
                {
                    title: "Legal Document",
                    img: "https://signaturely.com/wp-content/uploads/2022/08/non-disclosure-agreement-uplead-791x1024.jpg",
                    content: "PDF file",
                    date: "2024-02-28",
                    user: "Robert Johnson"
                },
                {
                    title: "University Application",
                    img: "https://image.slidesdocs.com/responsive-images/sheets/university-admission-application-form-excel-template_84d4739a7f__max.jpg    ",
                    content: "PDF file",
                    date: "2024-02-29",
                    user: "Julia Davis"
                },
                {
                    title: "Form 137",
                    img: "https://cdn.slidesharecdn.com/ss_thumbnails/form137-100630230353-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds",
                    content: "PDF file",
                    date: "2024-02-26",
                    user: "Charlie Brown"
                },
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
