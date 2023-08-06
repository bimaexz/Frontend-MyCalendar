const app = Vue.createApp({
    data() {
        return {
            idx: 0,
            selectedAnswer: "",
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 3,
            questions: [
                {
                    question:
                        "Bagaimana cara menormalkan siklus haid?",
                    answers: { a: "Tidur yang Cukup", b: "Begadang", c: "Tidak Olahraga", d: "Stress Berkepanjangan" },
                    correctAnswer: "a",
                },
                {
                    question: "Warna darah haid yang subur seperti apa?",
                    answers: { a: "Coklat", b: "Merah", c: "Hitam", d: "Merah Muda" },
                    correctAnswer: "b",
                },
                {
                    question:
                        "Darah Ovulasi warna apa?",
                    answers: { a: "Merah", b: "Coklat", c: "Hitam", d: "Merah Muda"  },
                    correctAnswer: "d",
                },
            ],
        };
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value;
            if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
                this.correctAnswers++;
            } else {
                this.wrongAnswers++;
            }
        },
        nextQuestion() {
            this.idx++;
            this.selectedAnswer = "";
            document.querySelectorAll("input").forEach((el) => (el.checked = false));
        },
        showResults() {
            this.idx++;
        },
        resetQuiz() {
            this.idx = 0;
            this.selectedAnswer = "";
            this.correctAnswers = 0;
            this.wrongAnswers = 0;
        },
    },
});

app.mount("#app");
