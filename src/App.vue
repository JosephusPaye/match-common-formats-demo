<template>
  <div class="mx-auto max-w-4xl p-8 md:pt-16">
    <div class="text-gray-500 text-sm flex px-4 flex-col md:flex-row">
      <div>
        Demo for
        <a
          class="underline hover:text-gray-900 focus:text-gray-900"
          target="_blank"
          rel="noopener"
          href="https://github.com/JosephusPaye/match-common-formats"
          >@josephuspaye/match-common-formats</a
        >
      </div>
      <div class="mt-3 md:mt-0 md:ml-auto flex">
        <div>
          By
          <a
            class="underline hover:text-gray-900 focus:text-gray-900"
            href="https://twitter.com/JosephusPaye"
            target="_blank"
            rel="noopener"
            >Josephus Paye II</a
          >
          for
          <a
            class="underline hover:text-gray-900 focus:text-gray-900"
            href="https://twitter.com/JosephusPaye/status/1214853295023411200"
            target="_blank"
            rel="noopener"
            >#CreateWeekly</a
          >.
        </div>
        <a
          class="ml-2 hover:text-gray-900 focus:text-gray-900"
          href="https://github.com/JosephusPaye/match-common-formats-demo"
          target="_blank"
          rel="noopener"
          title="View source on GitHub"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M13.18 11.309c-0.718 0-1.3 0.807-1.3 1.799 0 0.994 0.582 1.801 1.3 1.801s1.3-0.807 1.3-1.801c-0.001-0.992-0.582-1.799-1.3-1.799zM17.706 6.626c0.149-0.365 0.155-2.439-0.635-4.426 0 0-1.811 0.199-4.551 2.080-0.575-0.16-1.548-0.238-2.519-0.238-0.973 0-1.945 0.078-2.52 0.238-2.741-1.881-4.552-2.080-4.552-2.080-0.789 1.987-0.781 4.061-0.634 4.426-0.928 1.008-1.495 2.219-1.495 3.871 0 7.186 5.963 7.301 7.467 7.301 0.342 0 1.018 0.002 1.734 0.002s1.392-0.002 1.732-0.002c1.506 0 7.467-0.115 7.467-7.301 0-1.652-0.566-2.863-1.494-3.871zM10.028 16.915h-0.056c-3.771 0-6.709-0.449-6.709-4.115 0-0.879 0.31-1.693 1.047-2.369 1.227-1.127 3.305-0.531 5.662-0.531 0.010 0 0.020 0 0.029 0s0.018 0 0.027 0c2.357 0 4.436-0.596 5.664 0.531 0.735 0.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zM6.821 11.309c-0.718 0-1.3 0.807-1.3 1.799 0 0.994 0.582 1.801 1.3 1.801s1.301-0.807 1.301-1.801c0-0.992-0.582-1.799-1.301-1.799z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="mt-6 md:mt-4">
      <input
        autofocus
        type="text"
        v-model="input"
        class="w-full p-3 px-4 rounded shadow-lg text-lg"
        placeholder="Enter text to match..."
      />
    </div>
    <div v-if="input.length > 0 && results.length === 0" class="mt-4 p-4">
      No matches
    </div>
    <div
      v-if="input.length > 0 && results.length > 0"
      class="mt-6 p-4 rounded overflow-hidden shadow-lg"
      style="background-color: rgb(40, 42, 54)"
    >
      <pre
        v-highlight="JSON.stringify(results, null, '  ')"
      ><code class="json"></code></pre>
    </div>
  </div>
</template>

<script>
import { match } from '@josephuspaye/match-common-formats';
import { highlight } from './highlight';

export default {
  name: 'App',

  directives: {
    highlight,
  },

  data() {
    return {
      input: '',
      results: [],
    };
  },

  watch: {
    input(input) {
      this.results = match(input);
    },
  },
};
</script>
