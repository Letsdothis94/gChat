class User < ApplicationRecord
    has_many :messages
    belongs_to :account
end
