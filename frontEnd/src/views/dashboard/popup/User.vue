<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on }">
      <v-icon
        small
        class="mr-2"
        @click="editUser( item )"
        v-on="on"
        v-text="'$vuetify.icons.playlistEdit'"
      />
    </template>
    <v-container
      id="user-profile"
      fluid
      tag="section"
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="12"
        >
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-light">
                Edit Profile
              </div>

              <div class="subtitle-1 font-weight-light">
                Complete your profile
              </div>
            </template>

            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      label="Company (disabled)"
                      disabled
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      class="purple-input"
                      label="User Name"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      label="Email Address"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      label="First Name"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      label="Last Name"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Adress"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      label="City"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      label="Country"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      class="purple-input"
                      label="Postal Code"
                      type="number"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      class="purple-input"
                      label="About Me"
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </v-col>

                  <v-col
                    cols="6"
                    class="text-left"
                  >
                    <v-btn
                      color="warning"
                      class="mr-0"
                      @click="dialog = false"
                    >
                      Cancel
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="6"
                    class="text-right"
                  >
                    <v-btn
                      color="success"
                      class="mr-0 text-right"
                      @click="dialog = false"
                    >
                      Update Profile
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
