import pygame
import speech_recognition as sr
import random
import sys

# Initialize pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Voice-Controlled Pet Game")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# Load images
pet_images = [pygame.image.load(f'images/pet_frame1.png'), pygame.image.load(f'images/pet_frame2.png')]
background_images = [pygame.image.load(f'images/background1.png'), pygame.image.load(f'images/background2.png')]

# Pet settings
pet_size = 50
pet_x = WIDTH // 2
pet_y = HEIGHT // 2
pet_speed = 10
pet_animation_frame = 0

# Block settings
block_width = 100
block_height = 20
block_speed = 5
blocks = []

# Create a block
def create_block():
    x = random.randint(0, WIDTH - block_width)
    y = -block_height
    return pygame.Rect(x, y, block_width, block_height)

import pygame
import speech_recognition as sr
import random
import sys

# Initialize pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Voice-Controlled Pet Game")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# Load images
pet_images = [pygame.image.load(f'images/pet_frame1.png'), pygame.image.load(f'images/pet_frame2.png')]
background_images = [pygame.image.load(f'images/background1.png'), pygame.image.load(f'images/background2.png')]

# Pet settings
pet_size = 50
pet_x = WIDTH // 2
pet_y = HEIGHT // 2
pet_speed = 10
pet_animation_frame = 0

# Block settings
block_width = 100
block_height = 20
block_speed = 5
blocks = []

# Create a block
def create_block():
    x = random.randint(0, WIDTH - block_width)
    y = -block_height
    return pygame.Rect(x, y, block_width, block_height)

# Function to recognize speech and convert it to text
def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for your command...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            return command
        except sr.UnknownValueError:
            print("Sorry, I could not understand your voice. Please try again.")
        except sr.RequestError:
            print("Could not request results. Please check your network.")
        return None

# Main game logic
def game_loop():
    global pet_y, pet_animation_frame

    clock = pygame.time.Clock()
    score = 0
    high_score = 0
    background_index = 0

    # Create initial blocks
    for _ in range(5):
        blocks.append(create_block())

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # Get voice command
        command = recognize_speech()
        if command:
            if "up" in command.lower():
                pet_y -= pet_speed
            elif "down" in command.lower():
                pet_y += pet_speed

        # Move blocks and check for collisions
        for block in blocks:
            block.y += block_speed
            if block.y > HEIGHT:
                blocks.remove(block)
                blocks.append(create_block())
                score += 1
                if score > high_score:
                    high_score = score
                    background_index = (background_index + 1) % len(background_images)  # Change background

            if pygame.Rect(pet_x, pet_y, pet_size, pet_size).colliderect(block):
                print(f"Game Over! Your score is {score}.")
                pygame.quit()
                sys.exit()

        # Draw everything
        screen.blit(background_images[background_index], (0, 0))  # Draw background
        pet_animation_frame = (pet_animation_frame + 1) % len(pet_images)
        screen.blit(pet_images[pet_animation_frame], (pet_x, pet_y))  # Draw animated pet

        for block in blocks:
            pygame.draw.rect(screen, RED, block)

        # Draw text
        font = pygame.font.SysFont(None, 36)
        text = font.render('Made By Lakshay', True, BLACK)
        screen.blit(text, (10, 10))

        pygame.display.flip()
        clock.tick(30)

if __name__ == "__main__":
    game_loop()
￼Enter# Function to recognize speech and convert it to text
def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for your command...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            return command
        except sr.UnknownValueError:
            print("Sorry, I could not understand your voice. Please try again.")
        except sr.RequestError:
            print("Could not request results. Please check your network.")
        return None

# Main game logic
def game_loop():
    global pet_y, pet_animation_frame

    clock = pygame.time.Clock()
    score = 0
    high_score = 0
    background_index = 0

Create initial blocks
    for _ in range(5):
        blocks.append(create_block())

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # Get voice command
        command = recognize_speech()
        if command:
            if "up" in command.lower():
                pet_y -= pet_speed
            elif "down" in command.lower():
                pet_y += pet_speed

        # Move blocks and check for collisions
        for block in blocks:
            block.y += block_speed
            if block.y > HEIGHT:
                blocks.remove(block)
                blocks.append(create_block())
                score += 1
                if score > high_score:
