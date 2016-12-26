Fabricator(:todo) do
  name { Faker::Hipster.sentence }
  content { Faker::Hipster.paragraph }
  status { Faker::Number.between(1, 4) }
end
