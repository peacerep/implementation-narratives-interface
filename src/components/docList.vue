<template>
    <div class="doc-wrapper">
    <div class='doc-list' v-for='(agreement, index) in dataListDisplayed' :key='index'>
        <el-link
            :underline="false" 
            class="agt-link" 
            @click="toAgtView(agreement)">{{ agreement.agt }}</el-link>
        <p class="agt-time">Signed date: {{ agreement.date}}</p>

        <el-button text class="topic-button" @click="showTopics(index)">
            <el-icon v-if="openedIndex === index"><ArrowUpBold /></el-icon>
            <el-icon v-else><ArrowDownBold /></el-icon>
            <p style="padding-left: 5px; font-weight: 800;">{{ agreement.totalUniqueSubCats }} topics found</p>
        </el-button>

        <!-- OLD TOPIC LIST -->
        <!-- <div class="topic-box" v-show="openedIndex === index">
            <el-link class="topic-text" :underline="false"
                v-for="topic in agreement.topics" :key="topic"  
                @click="toAgtView_topic(agreement, topic)">{{ topic }}</el-link>
        </div> -->

        <div class="topic-box" v-show="openedIndex === index">
            <div
                v-for="(category, categoryIndex) in agreement.categoryList"
                :key="categoryIndex"
            >
                <el-link
                    v-for="(subcategory, subcategoryIndex) in category.subCategoryList"
                    :key="subcategoryIndex"
                    :title="subcategory"
                    class="topic-link"
                    :underline="false"
                    @click="toAgtView_subCat(agreement, subcategory, this.country)">
                {{ subcategory }}
                </el-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default ({

    props: ["dataListDisplayed", "title"],

    data() {
        return {
            country:  this.title,
            openedIndex: -1,

            activeCategory: [],
            activeSubcategory: {}
        }
    },

    methods: {
        // toAgtView(agreement) {
        //     console.log("select agreement", agreement)

        //     this.$router.push({
        //         name: `agreement`,
        //         query: {
        //             title: `${this.country}`,
        //             id: `${agreement.id}`,
        //             agtName: `${agreement.agt}`,
        //             agtDate: `${agreement.date}`,
        //             // topic: `${agreement.topics[0]}`
        //             topic: `${agreement.topics[0]}`,
        //             subCatAsTopic: `${agreement.categoryList[0].subCategoryList[0]}`
        //         }
        //     })
        // },

        toAgtView(agreement) {
            console.log("select agreement", agreement);

            // Prepare query parameters
            let queryParams = {
                title: `${this.country}`,
                id: `${agreement.id}`,
                agtName: `${agreement.agt}`,
                agtDate: `${agreement.date}`
            };

            // Add the first topic if it exists
            if (agreement.topics && agreement.topics.length > 0) {
                queryParams.topic = `${agreement.topics[0]}`;
            }

            // Check for the existence of categories and subcategories
            if (agreement.categoryList && agreement.categoryList.length > 0) {
                let firstCategory = agreement.categoryList[0];
                queryParams.category = firstCategory.label;

                if (firstCategory.subCategoryList && firstCategory.subCategoryList.length > 0) {
                    queryParams.subCatAsTopic = `${firstCategory.subCategoryList[0]}`;
                }
            }

            console.log("toAgtView", queryParams)

            // Navigate to the agreement view with the prepared query parameters
            this.$router.push({
                name: `agreement`,
                query: queryParams
            });
        },


        toAgtView_topic(agreement, topic) {
            this.$router.push({
                name: `agreement`,
                query: {
                    title: `${this.country}`,
                    id: `${agreement.id}`,
                    agtName: `${agreement.agt}`,
                    agtDate: `${agreement.date}`,
                    topic: `${topic}`
                }
            })
        },

        toAgtView_subCat(agt, subCat, country) {
            console.log("toAgtView_subCat", agt, subCat, country)
        },

        showTopics(index) {
            this.openedIndex = this.openedIndex === index ? -1 : index;
        }
    }
})
</script>