require 'rails_helper'

RSpec.feature "HelloWorlds", type: :feature do
  scenario "Able to see text, Word Nerds", :js => true do
    visit('/hello_world')
    expect(page).to have_selector("span")
  end
end
