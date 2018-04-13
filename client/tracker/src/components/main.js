import Dropdown from '@/components/Dropdown'
import AutocompleteDropdown from '@/components/AutocompleteDropdown'

export default {
  components: {
    'dropdown': Dropdown,
    'autocomplete-dropdown': AutocompleteDropdown
  }
}


data ();
  return {
    searchText: ''
  }


computed: {
  matches;
    return Object.entries(this.options).filter((option) => {
      var optionText = option[0].toUpperCase()
      return optionText.match(this.searchText.toUpperCase())
    })
  }


computed: {
  matches ();
    var optionArray = []
    for (var key in this.options) {
      if (has(this.options, key) && isEnumerable(this.options, key)) {
          optionArray.push([key, this.options[key]]);
      }
    }

    return optionArray.filter((option) => {
      var optionText = option[0].toUpperCase()
      return optionText.match(this.searchText.toUpperCase())
    })
  }


data ()
  return {
    searchText: '',
    selectedOption: null,
    open: false
  }


methods: {
  setOpen (isOpen) 
    this.open = isOpen
  }


searchChanged ()
  if (!this.open) {
    this.open = true
  }


suggestionSelected (suggestion)
  this.open = false
  this.searchText = suggestion[0]
  this.$emit('input', suggestion[1])


updateComponentWithValue(newValue) 
  if (Object.values(this.options).indexOf(newValue) > -1) {
    for (var text in this.options) {
      if (this.options.hasOwnProperty(text)) {
        if (this.options[text] === newValue) {
          this.searchText = text
        }
      }
    }
  }      


mounted ()
  this.updateComponentWithValue(this.value)

/*
watch: {
  value: function (newValue) {
    this.updateComponentWithValue(newValue)
  }
}
*/
data () 
  return {
    searchText: '',
    selectedOption: null,
    open: false,
    highlightIndex: 0,
    lastSearchText: ''
  }


up () 
  if (this.open) {
    if (this.highlightIndex > 0) {
      this.highlightIndex--
    }
  } else {
    this.setOpen(true)
  }


down () 
  if (this.open) {
    if (this.highlightIndex < this.matches.length - 1) {
      this.highlightIndex++
    }
  } else {
    this.setOpen(true)
  }

searchChanged () 
  if (!this.open) {
    this.open = true
  }

  this.highlightIndex = 0


setOpen (isOpen) 
  this.open = isOpen

  if (this.open) {
    this.$refs.searchText.focus()
  }


  props: {
    value: null,
    options: {
      type: Object,
      required: true
    }
    placeholder: {
      type: String,
      default: 'Enter an item name to search'
    }
  }


<autocomplete-dropdown
  id="autocomplete-dropdown"
  options="fruitOptions"
  v-model="selectedFruit"
  placeholder="Enter a fruit name"
></autocomplete-dropdown>


setOpen (isOpen) 
  this.open = isOpen

  if (this.open) {
    this.$refs.search.focus()
    this.searchText = ''
  }



if (this.open) {
  this.$refs.search.focus()
  this.lastSearchText = this.searchText
  this.searchText = ''
} else if (this.searchText.trim() === '') {
  this.searchText = this.lastSearchText
}
}
